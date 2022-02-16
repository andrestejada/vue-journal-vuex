<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-2 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>
      <div>
        <input
          type="file"
          @change="onSelectedImage"
          ref="imageSelector"
          v-show="false"
          accept="image/png,image/jpeg"
        />
        <button
          @click="onDelteEntry"
          v-if="entry.id"
          class="btn btn-danger mx-2"
        >
          Delete
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary" @click="onSelectImage">
          Upload Photo
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea
        placeholder="What happen today?"
        v-model="entry.text"
      ></textarea>
    </div>

    <img
      v-if="entry.picture && !localImage"
      :src="entry.picture"
      alt="entry-picture"
      class="img-thumnail"
    />
    <img v-if="localImage" :src="localImage" alt="local" class="img-thumnail" />
  </template>
  <Fab icon="fa-save" @on:click="saveEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import getDayMonthYear from "../helpers/getDayMonthYear";
import Swal from "sweetalert2";
import uploadImage from "../helpers/uploadImage";

export default {
  name:'EntryView',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  data() {
    return {
      entry: null,
      localImage: null,
      file: null,
    };
  },
  methods: {
    loadEntry() {
      this.localImage = null
      let entry;
      if (this.id === "new") {
        //create new
        entry = {
          text: "",
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }
      this.entry = entry;
    },
    async saveEntry() {
      new Swal({
        title: "Espere Por favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      const picture = await uploadImage(this.file);
      this.entry.picture = picture;
      if (this.entry.id) {
        await this.updateEntry(this.entry);
      } else {
        const id = await this.createEntry(this.entry);
        this.$router.push({ name: "entry", params: { id } });
      }
      this.file = null;
      Swal.fire("Saved", "successful entry", "success");
    },
    async onDelteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: "Are you sure?",
        text: "if you delete it you will not be able to recover it",
        showDenyButton: true,
        confirmButtonText: "Yes, I sure",
      });
      if (isConfirmed) {
        new Swal({
          title: "Wait Please...",
          allowOutsideClick: false,
        });
        Swal.showLoading;
        await this.deleteEntry(this.entry.id);
        this.$router.push({ name: "no-entry" });
        Swal.fire("Deleted", "", "success");
      }
    },
    onSelectedImage(e) {
      const file = e.target.files[0];
      if (!file) {
        this.localImage = null;
        return;
      }
      this.file = file;
      const fileReader = new FileReader();
      fileReader.onload = () => (this.localImage = fileReader.result);
      fileReader.readAsDataURL(file);
    },
    onSelectImage() {
      this.$refs.imageSelector.click();
    },
    ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style scoped lang="scss">
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #0000, $alpha: 0.2);
}
</style>

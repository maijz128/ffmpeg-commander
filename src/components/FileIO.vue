<template>
  <div class="input">
    <b-form-row>
      <!-- Input -->
      <b-col>
        <b-form-group label="Input:" label-for="input"
        >
          <b-input-group >
            <b-form-select
              v-if="!$store.state.ffmpegdEnabled || !$store.state.wsConnected"
              class="protocol"
              v-model="protocolInput"
              @change="update('input', $event)"
            >
              <option v-for="o in protocols" :key="o.id" :value="o.value">{{o.name}}</option>
            </b-form-select>

            <b-form-input
              v-if="!$store.state.ffmpegdEnabled || !$store.state.wsConnected"
              v-model="value.input"
              :state="Boolean(value.input)"
              placeholder="Example: input.mp4"
              @dragover="dragover" @dragleave="dragleave" @drop="drop"
            ></b-form-input>

            <b-form-input
              v-else
              v-model="value.input"
              placeholder=""
              @focus="onFileFocus"
            ></b-form-input>

            <div v-if="showFileBrowser">
              <!-- <FileBrowser v-on:file="onFileSelect" v-on:close="onClose" /> -->
            </div>
          </b-input-group>
        </b-form-group>
      </b-col>

      <!-- Output -->
      <b-col>
        <b-form-group label="Output:" label-for="output">
          <b-input-group>
            <b-form-select
              v-if="!$store.state.ffmpegdEnabled"
              class="protocol"
              v-model="protocolOutput"
              @change="update('output', $event)"
            >
              <option v-for="o in protocols" :key="o.id" :value="o.value">{{o.name}}</option>
            </b-form-select>

            <b-form-input
              v-model="value.output"
              :state="Boolean(value.output)"
              placeholder="Example: output.mp4"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-form-row>
  </div>
</template>

<script>
import form from '@/form';

// import FileBrowser from '@/components/FileBrowser.vue';

const {
  protocols,
} = form;

export default {
  name: 'Input',
  components: {
    // FileBrowser,
  },
  props: ['value'],
  data() {
    return {
      protocols,
      protocolInput: 'movie.mp4',
      protocolOutput: 'movie.mp4',
      showFileBrowser: false,
      filelist: [], // Store our uploaded files
    };
  },
  methods: {
    update(key, value) {
      this.$emit('input', { ...this.value, [key]: value });
    },
    onFileSelect(file) {
      this.update('input', file);
      this.showFileBrowser = false;
    },
    onFileFocus() {
      this.showFileBrowser = true;
    },
    onClose() {
      this.showFileBrowser = false;
    },

    onChange() {
      // this.filelist = [...this.$refs.file.files];
      console.log(this.filelist);
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains('drop-bg-allow')) {
        event.currentTarget.classList.remove('bg-gray-100');
        event.currentTarget.classList.add('drop-bg-allow');
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('drop-bg-allow');
    },
    drop(event) {
      event.preventDefault();
      this.filelist = event.dataTransfer.files;
      // this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('drop-bg-allow');
    },
  },
};
</script>

<style scoped>
.protocol {
  flex: 0 0 20% !important;
}
.drop-bg-allow{
  background-color: #94B49F;
}
.drop-bg-wrong{
  background-color: #94B49F;
}
</style>

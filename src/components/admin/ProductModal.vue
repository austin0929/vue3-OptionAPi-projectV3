<template>
  <div class="modal fade" tabindex="-1" ref="myModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-light">新增產品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-8">
              <div class="row">
                <div class="col-4">
                  <label for="title" class="form-label">產品名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品名稱"
                    id="title"
                    v-model="tempProduct.title"
                  />
                </div>
                <div class="col-4">
                  <label for="category" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入產品分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="col-4">
                  <label for="unit" class="form-label">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入產品單位"
                    v-model="tempProduct.unit"
                  />
                </div>
                <div class="col-6">
                  <label for="origin_price" class="form-label mt-3">原價</label>
                  <input
                    type="text"
                    class="form-control"
                    id="origin_price"
                    placeholder="請輸入產品原價"
                    v-model.number="tempProduct.origin_price"
                  />
                </div>
                <div class="col-6">
                  <label for="price" class="form-label mt-3">特價</label>
                  <input
                    type="text"
                    class="form-control"
                    id="price"
                    placeholder="請輸入產品價格"
                    v-model.number="tempProduct.price"
                  />
                </div>
                <div>
                  <label for="description" class="form-label mt-3"
                    >產品描述</label
                  >
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  >
                  </textarea>
                </div>
                <div>
                  <label for="content" class="form-label mt-3">產品說明</label>
                  <textarea
                    id="content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品說明"
                    v-model="tempProduct.content"
                  >
                  </textarea>
                </div>
                <div class="mt-2">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label ms-1" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
            <div class="col-4">
              <div>
                <label for="imgUrl" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  id="imgUrl"
                  placeholder="請輸入圖片網址"
                  v-model="tempProduct.imageUrl"
                />
                  <label for="customFile" class="form-label">上傳圖片</label>
                  <input
                    type="file"
                    name="file-to-upload"
                    id="customFile"
                    @change="uploadFile"
                    ref="fileInput"
                    class="form-control"
                  />
                <img class="img-fluid" :src="tempProduct.imageUrl" />
              </div>
              <div v-if="Array.isArray(tempProduct.imagesUrl)" class="mt-3">
                <div v-for="(image, key) in tempProduct.imagesUrl" :key="image">
                  <img
                    :src="image"
                    class="img-fluid object-fit-cover"
                    style="height: 150px; width: 100%"
                  />
                  <input
                    type="text"
                    v-model="tempProduct.imagesUrl[key]"
                    class="form-control"
                  />
                </div>
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  v-if="
                    tempProduct.imagesUrl.length === 0 ||
                    tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                  "
                  @click="tempProduct.imagesUrl.push('')"
                >
                  新增圖片
                </button>
                <button
                  v-else
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="tempProduct.imagesUrl.pop()"
                >
                  刪除圖片
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="addProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalMixins from '@/mixins/modalMixins'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  props: ['product'],
  data () {
    return {
      modal: null,
      tempProduct: {}
    }
  },
  methods: {
    addProduct () {
      this.$emit('update-product', this.tempProduct)
    },
    uploadFile () {
      const updateFile = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('up-load-file', updateFile)
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`
      this.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          if (res.data.success) {
            this.tempProduct.imageUrl = res.data.imageUrl
            this.tempProduct.imagesUrl.push(res.data.imageUrl)
            this.$refs.fileInput.value = ''
          }
        }).catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '無法上傳圖片', 'error')
          }
        })
    }
  },
  watch: {
    product () {
      this.tempProduct = this.product
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = []
      }
    }
  },
  mixins: [ModalMixins]
}
</script>

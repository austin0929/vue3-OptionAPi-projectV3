<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="myModal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-light" id="exampleModalLabel">優惠券</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="請輸入標題"
              v-model="tempCoupon.title"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              placeholder="請輸入優惠碼"
              v-model="tempCoupon.code"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input type="date" class="form-control" id="due_date" v-model="due_date" />
          </div>
          <div class="mb-3">
            <label for="percent">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="percent"
              placeholder="請輸入折扣百分比"
              v-model="tempCoupon.percent"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                id="is_enabled"
                v-model="tempCoupon.is_enabled"
              />
              <label class="form-check-label" for="is_enabled"> 是否啟用 </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="updateCoupon">更新優惠券</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalMixins from '@/mixins/modalMixins'
export default {
  props: ['coupon'],
  data () {
    return {
      modal: null,
      tempCoupon: {},
      due_date: ''
    }
  },
  methods: {
    updateCoupon () {
      this.$emit('update-coupon', this.tempCoupon)
      this.hideModal()
    }
  },
  watch: {
    coupon () {
      this.tempCoupon = this.coupon
      const couponDate = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T')
      ;[this.due_date] = couponDate
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  mixins: [ModalMixins]
}
</script>

<template>
  <VueLoading :active="isLoading" />
  <div class="mb-md-5 mb-3">
    <div class="indexBanner">
      <div class="container">
        <div>
          <div class="custom-btn-primary">
            <h2 class="fw-bold mb-3 text-light h1 mb-5">
              堅持品質的美味用心
              <p>烹飪給每一位顧客</p>
            </h2>
            <p class="mb-0 text-light">特級初榨橄欖油、大蒜、洋蔥、蘑菇、</p>
            <p class="text-light">綠橄欖、黑橄欖、新鮮番茄。</p>
            <button
              type="button"
              class="btn rounded mt-3 btn-lg"
              @click.prevent="$router.push('/products')"
            >
              立刻選購
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container my-md-5 my-3">
    <div class="row">
      <div class="col-md-3 col-6">
        <div class="text-center">
          <i class="bi bi-truck text-primary index-service-icon"></i>
          <h3 class="h5">免運費</h3>
          <p class="text-secondary">使用堅固容器包裝，運送過程免運費</p>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="text-center">
          <i class="bi bi-box2 text-primary index-service-icon"></i>
          <h3 class="h5">30分鐘內送達</h3>
          <p class="text-secondary">美食將會快速的送達您的家中</p>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="text-center">
          <i class="bi bi-telephone text-primary index-service-icon"></i>
          <h3 class="h5">24小時客服</h3>
          <p class="text-secondary">我們準備隨時接聽您的電話</p>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="text-center">
          <i class="bi bi-gift text-primary index-service-icon"></i>
          <h3 class="h5">品質保證</h3>
          <p class="text-secondary">您的訂單到達時將保證完好無損</p>
        </div>
      </div>
    </div>
    <hr />
  </div>

  <div class="container mb-md-5 mb-3">
    <h2 class="text-center fw-bold mb-4">用心烹飪每項食材</h2>
    <div class="row">
      <div class="col-md-6">
        <img
          src="/src/assets/img/indexPage/food.jpg"
          alt="主頁描述料理圖"
          class="object-fit-cover introduce-img-size"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4 fw-bold">料理</h4>
        <p class="text-muted">
          我們的料理充滿了用心和熱情，
          每一道菜都是我們精心挑選的食材和細心烹調的結果。
          我們追求的不僅僅是美味，更是對食物的尊重和愛。
          從新鮮的食材到精湛的廚藝，每一個細節都反映了我們對料理的熱愛和堅持
          。讓我們的用心之作，帶給您最美味的享受和溫馨的回憶。
        </p>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img
          src="/src/assets/img/indexPage/chef.jpg"
          alt="主頁描述廚師圖"
          class="img-fluid introduce-img-size object-fit-cover"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4 fw-bold">廚師</h4>
        <p class="text-muted">
          我們的廚師將熱情和專業融入每一道菜中
          。他們不僅是技藝嫻熟的大廚，更是對料理充滿熱愛的藝術家
          。他們精挑細選最優質的食材，細心烹調，追求每一道菜的完美味道和視覺效果。
          他們用心對待每一道菜，為客人帶來滿足和驚喜。他們的熱情和用心，
          讓料理更加美味動人，成為餐桌上的藝術品。
        </p>
      </div>
    </div>
  </div>

  <div>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :direction="'horizontal'"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="position-relative py-7 mb-md-5 mb-3">
          <div class="swiper-img-one"></div>
          <div class="container d-flex flex-column">
            <div class="row justify-content-center my-auto">
              <div class="col-md-4 text-center">
                <img
                  src="/src/assets/img/indexPage/customer1.jpg"
                  alt="顧客評價圖"
                  class="mb-3 object-fit-cover swiper-customer-img-size"
                />
                <h2 class="fw-bold mb-3 text-light">愛麗莎</h2>
                <p class="mb-3 text-light">
                  這家餐廳簡直是天堂！他們的牛排烤得恰到好處，
                  口感鮮嫩多汁，每一口都是極致享受。服務態度親切
                  ，環境雅致，讓用餐體驗更上一層樓。絕對是值得一試的高級餐廳！
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="position-relative py-7 mb-md-5 mb-3">
          <div class="swiper-img-three"></div>
          <div class="container d-flex flex-column">
            <div class="row justify-content-center my-auto">
              <div class="col-md-4 text-center">
                <img
                  src="/src/assets/img/indexPage/customer2.jpg"
                  alt="顧客評價圖"
                  class="mb-3 object-fit-cover swiper-customer-img-size"
                />
                <h2 class="fw-bold mb-3 text-light">珍妮佛</h2>
                <p class="mb-0 text-light">
                  這家餐廳的披薩味道絕佳，餅皮鬆軟香脆，配料新
                  鮮豐富。特色口味獨具創意，令人回味無窮。
                  服務態度親切，環境舒適，是品嚐美味披薩的絕佳選擇。
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="position-relative py-7 mb-md-5 mb-3">
          <div class="swiper-img-two"></div>
          <div class="container d-flex flex-column">
            <div class="row justify-content-center my-auto">
              <div class="col-md-4 text-center">
                <img
                  src="/src/assets/img/indexPage/customer3.jpg"
                  alt="顧客評價圖"
                  class="mb-3 object-fit-cover swiper-customer-img-size"
                />
                <h2 class="fw-bold mb-3 text-light">潔西卡</h2>
                <p class="mb-0 text-light">
                  這家餐廳的美食令人驚艷，每一道菜都精心 製作，味道獨特鮮美
                  。用餐環境 舒適， 服務態 度親切周到。特別推薦
                  他們的招牌菜，絕對是美食愛好者的不容錯過之處。
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <div class="container mb-md-5 mb-3">
    <h2 class="text-center fw-bold mb-4">我們的菜單</h2>

    <div class="row mb-6">
      <div
        class="col-lg-3 col-md-6"
        v-for="product in randomProducts"
        :key="product.id"
      >
        <div class="card border p-2 mb-4 position-relative">
          <a href="#" @click.prevent="$router.push(`/product/${product.id}`)">
            <img
              height="200"
              :src="product.imageUrl"
              class="card-img-top rounded mb-3 object-fit-cover cardHover"
              alt="其他相關產品圖"
            />
            <div class="card-body p-0">
              <h4 class="text-dark">{{ product.title }}</h4>
              <p class="card-text text-muted mb-2 text-truncate">
                {{ product.description }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="text-primary fw-bold me-2"
                    >$ {{ product.origin_price }}</span
                  >
                  <p class="mb-0 text-muted text-end d-inline-block">
                    <del>${{ product.origin_price }}</del>
                  </p>
                </div>
                <div class="custom-btn-primary">
                  <a
                    href="#"
                    class="btn"
                    @click.prevent.stop="addToCart(product)"
                  >
                    <i class="bi bi-handbag"></i>
                  </a>
                </div>
              </div>
            </div>
          </a>
          <div>
            <a href="#" class="p-2 bookmark-icon" @click.prevent>
              <i
                class="bi bi-heart-fill"
                @click="addBookmark(product)"
                 :class="{ 'bookmark-selected': isSelected(product.id) }"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'
import BookmarkStore from '@/stores/bookmarkStore'
import { A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import VueLoading from '@/components/VueLoading.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  components: {
    Swiper,
    SwiperSlide,
    VueLoading
  },
  data () {
    return {
      products: [],
      randomProducts: [],
      isLoading: false,
      onSwiper: {},
      onSlideChange: {},
      modules: [A11y, Autoplay]
    }
  },
  methods: {
    ...mapActions(CartStore, ['addToCart']),
    ...mapActions(BookmarkStore, ['getBookmark', 'addBookmark', 'delBookmark', 'isSelected']),
    getProducts () {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products
            setTimeout(() => {
              this.isLoading = false
            }, 2000)
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$swal('錯誤', '你所查看的API不存在', 'error')
          }
        })
    },
    getRandomProducts () {
      const newRandomProducts = this.products.slice(0)
      const randomItems = []
      let index
      for (let i = 0; i < 4; i++) {
        index = Math.floor(Math.random() * newRandomProducts.length)
        randomItems.push(newRandomProducts[index])
        newRandomProducts.splice(index, 1)
      }

      this.randomProducts = randomItems
    }
  },
  watch: {
    products: {
      handler () {
        this.getRandomProducts()
      },
      deep: true
    }
  },
  computed: {
    ...mapState(BookmarkStore, ['bookmark', 'bookmarkDate'])
  },
  mounted () {
    this.getProducts()
    this.getBookmark()
  }
}
</script>

<style lang="scss" scope>
.indexBanner {
  background-image: url("/src/assets/img/indexPage/indexBanner.jpg");
  background-position: center center;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    height: 65vh;
  }
}

.index-service-icon {
  font-size: 3rem;
}

.introduce-img-size {
  max-height: 450px;
  width: 100%;
}
</style>

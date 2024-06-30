import Product from "@/components/product";

export default {
  name: "Home",
  components: {
    Product,
  },
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  computed: {},
  created() {
    this.loading = true;
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        // filter available farmas
        this.products = data
          .filter((farma) => farma.stock_count > 0)
          .map((item) => {
            return {
              ...item,
              price: item.is_on_discount
                ? item.discounted_price
                : item.original_price,
            };
          });
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {},
};

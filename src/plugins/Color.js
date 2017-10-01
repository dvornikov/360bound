export default class Color {
  static install(Vue) {
    Vue.directive('colorful-children', (el, binding, vnode, oldVnode) => {
        let children = [];
        if (el) {
          children = el.childNodes;
          Vue.nextTick(() => {
            let all = children.length;
            let step = 10 / all;
            var color="rgba(255,255,0,";
            for (var n = 0; n < all; n++) {
              let opacity = step * (n+1) / 10;
              let newTone = color+opacity+")";
              children[n].style.backgroundColor = newTone;
            }
          });
        }
    });
  }
}

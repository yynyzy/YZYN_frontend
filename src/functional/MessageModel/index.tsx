import { createApp } from 'vue';
import { defineComponent } from 'vue';
import styles from './index.module.css';

/** V1 Vue3推荐下面的  defineComponent */
// const Model = {
//   props: {
//     header: {
//       type: String,
//       default: 'header',
//     },
//     content: {
//       type: String,
//       default: '弹窗',
//     },
//     callBack: Function,
//   },
//   render (ctx: any) {
//     const { $props, $emit } = ctx;
//     return (
//       <div class= { styles.wrapper }>
//         <div class={ styles.box }>
//         <div v-if={ $props.header } class={ styles.header }>
//             <text class={ styles.title }>{ $props.header }</text>
//           </div>
//           <div class={ styles.content }>
//             <p>{ $props.content }</p>
//           </div>
//           <div class={styles.footer}>
//             <button class={ styles.btn } onClick={ $emit('onClick') }>确认</button>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


const props = {
  header: {
    type: String,
    default: 'header',
  },
  content: {
    type: String,
    default: '弹窗',
  },
  callBack: Function,
};

const Model = defineComponent({
  props,
  emits: ['click'],
  setup(props, { emit }) {
    const onClick = (event: MouseEvent) => {
      emit("click", event);
    };
    return () => (
      <div class= { styles.wrapper }>
        <div class={ styles.box }>
        <div v-if={ props.header } class={ styles.header }>
            <text class={ styles.title }>{ props.header }</text>
          </div>
          <div class={ styles.content }>
            <p>{ props.content }</p>
          </div>
          <div class={styles.footer}>
            <button class={ styles.btn } onClick={ onClick }>确认</button>
          </div>
        </div>
      </div>
    )
  }
})


const showMessageModel = ( props: { header?: String, content?: String }, callBack: Function) => {
  const el = document.createElement('div');
  document.body.appendChild(el);
  const component = createApp(Model, {
    header: props.header,
    content: props.content,
    onClick() {
      callBack && callBack(el);
      component.unmount();
      el.remove();
    },
  });
  component.mount(el)
}

export default showMessageModel;

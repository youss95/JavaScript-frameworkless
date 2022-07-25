const regist = {};

const renderWrapper = (component) => {
  return (targetElement, state) => {
    const element = component(targetElement, state);

    const childComponents = element.querySelectorAll("[data-component]");

    Array.from(childComponents).forEach((target) => {
      //target의 data-component
      const name = target.dataset.component;

      //registry: {todos:f,counter:f,filters:f}
      const child = regist[name];
      console.log("child", regist[name]);
      if (!child) {
        return;
      }

      target.replaceWith(child(target, state));
    });

    return element;
  };
};

const add = (name, component) => {
  regist[name] = renderWrapper(component);
};

const renderRoot = (root, state) => {
  const cloneComponent = (root) => {
    return root.cloneNode(true);
  };

  return renderWrapper(cloneComponent)(root, state);
};

export default {
  add,
  renderRoot,
};

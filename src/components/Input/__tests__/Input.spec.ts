import { shallowMount } from "@vue/test-utils";
import Input from "@/components/Input/index.vue";

// TODO: test error-message
describe("components/Input", () => {
  it("renders text input correctly", () => {
    const props = {
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      successMessage: "Success Message"
    };
    const wrapper = shallowMount(Input, {
      props
    });
    expect(wrapper.props("name")).toEqual(props.name);
    expect(wrapper.props("type")).toEqual(props.type);
    expect(wrapper.props("placeholder")).toEqual(props.placeholder);
    expect(wrapper.find("label").text()).toEqual(props.label);
    expect(wrapper.find("small.success-message").text()).toEqual(
      props.successMessage
    );
  });
  it("renders password input correctly", () => {
    const props = {
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      successMessage: "Success Message"
    };
    const wrapper = shallowMount(Input, {
      props
    });
    expect(wrapper.props("name")).toEqual(props.name);
    expect(wrapper.props("type")).toEqual(props.type);
    expect(wrapper.props("placeholder")).toEqual(props.placeholder);
    expect(wrapper.find("label").text()).toEqual(props.label);
    expect(wrapper.find("small.success-message").text()).toEqual(
      props.successMessage
    );
  });
});

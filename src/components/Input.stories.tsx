
import {Input} from "./Input"

export default {
  title: 'Components/Input',
  component: Input,
};


export const Basic = () => <Input placeholder="Basic Input" />;
export const OutlinedInput = () => <Input type="outlinedLabel" placeholder="Outlined Input" label="Outlined Input" />;



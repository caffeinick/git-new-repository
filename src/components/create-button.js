import { Button } from '../atoms';

const CreateButton = ({ children, ...rest }) => (
  <Button type="button" {...rest}>
    {children}
  </Button>
);

export default CreateButton;

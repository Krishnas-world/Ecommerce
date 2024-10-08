import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function CommonForm({ formcontrols, formData, setFormData, onSubmit, buttonText, isBtnDisabled}) {
  const renderInputByComp = (getItem) => {
    let element = null;
    const value = formData[getItem.name] || '';

    switch (getItem.componentType.toLowerCase()) { // Ensure case insensitivity
      case "input":
        element = (
          <Input
            name={getItem.name}
            placeholder={getItem.placeholder}
            id={getItem.name}
            type={getItem.type}
            value={value}
            onChange={e => setFormData({
              ...formData,
              [getItem.name]: e.target.value
            })}
          />
        );
        break;

      case "select":
        element = (
          <Select
            onValueChange={(value) => setFormData({
              ...formData,
              [getItem.name]: value
            })}
            name={getItem.name}
            id={getItem.name}
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getItem.options && getItem.options.length > 0
                ? getItem.options.map((optionItem) => (
                  <SelectItem
                    key={optionItem.id}
                    value={optionItem.id} // Use optionItem.id as value
                  >
                    {optionItem.label}
                  </SelectItem>
                ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            name={getItem.name}
            placeholder={getItem.placeholder}
            id={getItem.name}
            value={value}
            onChange={e => setFormData({
              ...formData,
              [getItem.name]: e.target.value
            })}
          />
        );
        break;

      default:
        element = (
          <Input
            name={getItem.name}
            placeholder={getItem.placeholder}
            id={getItem.name}
            type={getItem.type}
            value={value}
            onChange={e => setFormData({
              ...formData,
              [getItem.name]: e.target.value
            })}
          />
        );
    }

    return element;
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formcontrols.map((controlItem) => (
          <div key={controlItem.name} className="w-full gap-1.5">
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputByComp(controlItem)}
          </div>
        ))}
      </div>
      <Button disabled={isBtnDisabled} className='mt-2 w-full' type='submit'>{buttonText || "Submit"}</Button>
    </form>
  );
}

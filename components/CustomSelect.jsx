import {
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem
} from "@mui/material";

export default function CustomSelect(props) {
  const { title, helperText, value, options } = props;
  return (
    <FormControl size="small">
      <InputLabel>{title}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        className="bv-select"
        label={title}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options &&
          options.map((item) => {
            return (
              <MenuItem key={item.key} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

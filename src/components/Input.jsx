import { TextField, Button } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function Input(props) {
  const {
    title,
    helperText,
    type,
    value,
    required,
    error,
    otp,
    clearField
  } = props;
  return (
    <TextField
      className="bv-input"
      error={error}
      // type={type}
      // sx={{ width: "400px" }}
      required={required}
      id="outlined-required"
      label={title}
      defaultValue={value}
      // value={value}
      helperText={helperText}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        classes: { input: "file-input" },
        endAdornment: clearField ? (
          value && (
            <Button>
              <CancelOutlinedIcon />
            </Button>
          )
        ) : otp ? (
          <Button>
            <span>Send OTP</span>
          </Button>
        ) : (
          ""
        )
      }}
    />
  );
}

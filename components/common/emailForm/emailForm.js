import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import styles from "./emailForm.module.css";
import SendTwoToneIcon from "@Material-Ui/Icons/SendTwoTone";

export default function EmailForm() {
  const inputFieldStyle = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        boxShadow: "0 0 8px rgb(60, 60, 60, 0.5)",
        border: "1px solid black",
      },
    },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleRegistration = async (data) => {
    await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(data),
    });
    reset({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <form
      method="post"
      className={styles.contactForm}
      onSubmit={handleSubmit(handleRegistration)}
    >
      <div className={styles.infoContainer}>
        <div className={styles.inputField}>
          <TextField
            className={styles.infoTextField}
            id="outlined"
            name="name"
            placeholder="Your Name"
            {...register("name", { required: "Name can't be empty" })}
            sx={inputFieldStyle}
          />
          {errors?.name && (
            <div>
              <p className={styles.errorMessage}>{errors?.name?.message}</p>
            </div>
          )}
        </div>
        <div className={styles.inputField}>
          <TextField
            className={styles.infoTextField}
            id="outlined"
            type="email"
            placeholder="Your Email"
            name="email"
            {...register("email", { required: "Email can't be empty" })}
            sx={inputFieldStyle}
          />
          {errors?.name && (
            <div>
              <p className={styles.errorMessage}>{errors?.email?.message}</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.messageField}>
        <TextField
          className={styles.textField}
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Your Message Here..."
          {...register("message", { required: "Message can't be empty" })}
          sx={inputFieldStyle}
        />
        {errors?.name && (
          <div>
            <p className={styles.errorMessage}>{errors?.message?.message}</p>
          </div>
        )}
      </div>
      <button type="submit" className={styles.submitButton}>
        <span className={styles.mailIcon}>
          <SendTwoToneIcon />
        </span>
        Send Email
      </button>
    </form>
  );
}

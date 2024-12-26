"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Success } from "./success";
import { Confirm } from "./confirm";

export const emailRegExp: any =
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

type Errors = {
  [key: string]: boolean;
};

const DEFAULT_FIELDS = {
  name: "",
  email: "",
  company: "",
  desc: "",
  confirm: false,
};

export const Form = () => {
  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [error, setError] = useState<Errors>({});
  const [isSuccess, setSuccess] = useState(false);

  const checkErrors = () => {
    let hasError = false;

    Object.entries(fields).map((item) => {
      const [name, value] = item;

      if (name !== "company") {
        if (!value && !hasError) {
          hasError = true;
        }

        setError((prev) => ({
          ...prev,
          [name]: !value,
        }));
      }
    });

    return hasError;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setError((prev) => ({
      ...prev,
      [name]:
        name === "confirm"
          ? !checked
          : name === "email"
          ? !value.match(emailRegExp)
          : !value,
    }));

    setFields((prev) => ({
      ...prev,
      [name]: name === "confirm" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    const hasError = checkErrors();

    if (hasError) return;

    try {
      const resp = await fetch("/sendmail", {
        method: "POST",
        body: JSON.stringify({ ...fields }),
      });

      if (resp.status !== 200) {
        throw new Error("error");
      }

      setFields(DEFAULT_FIELDS);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex-1 w-full">
        <h5 className="text-[22px] mb-5 text-white mx-auto text-center xl:text-start">
          Форма обратной связи
        </h5>
        <div className="flex flex-col max-w-[468px] xl:max-w-full xl:flex-row gap-5 items-center [&>div]:w-full xl:[&>div]:w-auto mx-auto">
          <input
            type="text"
            className={`w-full ${error["name"] ? "invalid" : ""}`}
            placeholder="Имя"
            name="name"
            onChange={handleInputChange}
            value={fields.name}
            aria-invalid={error["name"]}
          />
          <input
            type="text"
            className="w-full"
            placeholder="Компания"
            name="company"
            onChange={handleInputChange}
            value={fields.company}
          />
          <input
            type="email"
            className={`w-full ${error["email"] && "invalid"}`}
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            value={fields.email}
            aria-invalid={error["email"]}
          />
          <input
            type="text"
            className={`w-full ${error["desc"] && "invalid"}`}
            placeholder="Текст"
            name="desc"
            onChange={handleInputChange}
            value={fields.desc}
            aria-invalid={error["desc"]}
          />

          <div className="xl:hidden">
            <Confirm
              value={fields.confirm}
              onChange={handleInputChange}
              isError={error["confirm"]}
            />
          </div>

          <div className="flex justify-end w-full">
            <Button
              variant="sm"
              onClick={handleSubmit}
              className="w-full xl:w-auto"
            >
              отправить
            </Button>
          </div>
        </div>

        <div className="hidden xl:flex mt-4">
          <Confirm
            value={fields.confirm}
            onChange={handleInputChange}
            isError={error["confirm"]}
          />
        </div>
      </div>

      {isSuccess && <Success onCloseClick={setSuccess} />}
    </>
  );
};

import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";

import Form from "../components/Forms/Form";
import NumberInput from "../components/Forms/NumberInput";
import Date from "../components/Forms/Date";
import Checkbox from "../components/Forms/Checkbox";

type ValueInputs = {
  firstExampleNumber: number;
  secondExampleNumber: number;
  exampleDate: string;
  exampleBoolean: boolean;
};

const Home: NextPage = () => {
  const [formError, setFormError] = useState(false);
  const [formData, setFormdata] = useState<ValueInputs | undefined>();

  const onSubmit: SubmitHandler<ValueInputs> = (data) => {
    setFormdata(data);
  };

  const onError: SubmitErrorHandler<ValueInputs> = (error) => {
    setFormError(true);
  };

  return (
    <div>
      <Head>
        <title>Form Boilerplate</title>
        <meta name="description" content="Form Boilerplate demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-3xl p-4 mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          React-Hook-Form components with Typescript
        </h1>
        <Form<ValueInputs> onSubmit={onSubmit} onError={onError}>
          {({ register }) => (
            <>
              <NumberInput
                label="First Example Number (Required)"
                register={register("firstExampleNumber")}
                required
              />
              <NumberInput
                label="Second Example Number"
                register={register("secondExampleNumber")}
              />
              <Date label="Example date" register={register("exampleDate")} />
              <Checkbox
                label="Example boolean"
                register={register("exampleBoolean")}
              />
              <button
                className="rounded-full px-4 py-2 bg-blue-600 text-white"
                type="submit"
              >
                Submit
              </button>
            </>
          )}
        </Form>
        {formError ? (
          <div>Something went wrong during form submission.</div>
        ) : (
          <>
            <h2 className="text-xl font-bold mt-4 mb-2">Form result:</h2>
            <div className=" break-words">{JSON.stringify(formData)}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

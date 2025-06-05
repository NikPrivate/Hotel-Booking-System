import React from "react";
import { Form, Formik } from "formik";

export default function FormikForm({
  enableReinitialize = true,
  initialValues,
  validationSchema,
  onSubmit,
  innerRef,
  children,
  className = "",
}) {
  return (
    <Formik
      innerRef={innerRef}
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={className}>{children}</Form>
    </Formik>
  );
}

type DefaultTypeOfUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(
  initialValues: Partial<DefaultTypeOfUser>
): DefaultTypeOfUser {
  const defaultUser: DefaultTypeOfUser = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defaultUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

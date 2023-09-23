import { AddContactBtn, Container, InputEl, StyledForm } from './QuizForm.styled';

export const QuizForm = () => {

  return (
    <>
      <h2>Phonebook</h2>
      <StyledForm >
        <ul>
          <Container>
            <p>Name:</p>
            <InputEl
              name="name"
              placeholder="add new name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </Container>
          <Container>
            <p>Number:</p>
            <InputEl
              name="contacts"
              placeholder="add new number"
              pattern="\+?[0-9\s\-\(\)]+"
            />
          </Container>
          <li>
            <AddContactBtn>Add contact</AddContactBtn>
          </li>
        </ul>
      </StyledForm>
    </>
  );
};

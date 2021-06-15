import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders customer application home page', () => {
  render(<App />); // instead of ReactDOM.render()
  const linkElement = screen.getByText(/Customer Application/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders component", () => {
  let {container} = render(<App/>);
  let btns = container.querySelectorAll(".row");
  expect(btns.length).toBe(6);

  /*
  render(<App/>);
   let btns =  screen.getAllByRole("button");
   expect(btns.length).toBe(6);
  */
});

it("delete a customer", () => {
  render(<App />);
  let btns =  screen.getAllByRole("button");
  fireEvent.click(btns[2]);
  btns =  screen.getAllByRole("button");
  expect(btns.length).toBe(5);
  // screen.debug();
});


// it("filter customers", () => {
//   render(<App />);
//   let txtBox = screen.getByPlaceholderText("search by name");
//   fireEvent.change(txtBox, {"target": {"value": "Geller"}});
//   let btns =  screen.getAllByRole("button");
//   expect(btns.length).toBe(2);
//   // screen.debug();
// });
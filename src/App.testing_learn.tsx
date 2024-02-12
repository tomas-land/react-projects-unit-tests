import App from './App';
import { getAllByAltText, render, screen, userEvent } from './utils/test_utils';

describe('App', () => {
    // looking for text
    it("is text react and vite are visible", () => {
        render(<App />);
        const text = screen.getByText("Vite + React");
        expect(text).toBeInTheDocument();
    }
    )
    // checking if counter text is visible after click
    it("should increment count on click", async () => {
        render(<App />);
        userEvent.click(screen.getByRole("button"));
        expect(await screen.findByText(/count is 0/i)).toBeInTheDocument();
    });
    // checking if app has two links
    it("app has two links", () => {
        render(<App />)
        const links = screen.getAllByRole('link')
        expect(links).toHaveLength(2)
    })
    // check if link has an image and alt text
    it("link has an image and alt text", () => {
        render(<App />)
        const links = screen.getAllByRole('link')
        links.forEach(link => {
            const images = getAllByAltText(link, /logo/i)
            expect(images).toHaveLength(1)
        })
    })
})
// it("api success secnario on load", async () => {
//     render(<App />);
//     expect(await screen.findByText("Todo List : 1")).toBeInTheDocument();
//   });
//
// it("api error scenario on load", () => {
//     render(<App />);
//     server.use(
//       http.get("https://dummyjson.com/todos", () => {
//         return new HttpResponse(null, { status: 401 });
//       })
//     );
//     expect(screen.queryByText("Todo List")).not.toBeInTheDocument();
//   });





// test('App', () => {
//    expect(App).toBeTruthy()
// }

// describe('suite name', () => {
//   it('foo', () => {
//     assert.equal(Math.sqrt(4), 2)
//   })

//   it('bar', () => {
//     expect(1 + 1).eq(2)
//   })

// })
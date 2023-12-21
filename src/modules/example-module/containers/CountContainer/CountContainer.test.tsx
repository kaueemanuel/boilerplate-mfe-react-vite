import { render, screen, fireEvent } from "@testing-library/react"

import CountContainer from "./CountContainer"

describe("CountContainer", () => {
  it("cerrectly render", async () => {
    render(<CountContainer />)
    const title = await screen.findByText(/counter: 0/i)
    expect(title).toBeInTheDocument()
  })
  it("it should show 1 when you click on count button", async () => {
    render(<CountContainer />)
    const title = await screen.findByText(/counter: 0/i)
    expect(title).toBeInTheDocument()

    const countButton = screen.getByTestId("count-button")
    fireEvent.click(countButton)

    const titleWithOne = await screen.findByText(/counter: 1/i)
    expect(titleWithOne).toBeInTheDocument()
  })
})
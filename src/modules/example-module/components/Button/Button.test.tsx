import { render, screen } from "@testing-library/react"

import Button from "./Button.tsx"

describe("Button", () => {
  it("cerrectly render", async () => {
    render(<Button>count</Button>)
    const title = await screen.findByText(/count/i)
    expect(title).toBeInTheDocument()
  })
})
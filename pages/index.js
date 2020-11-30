import { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default class Home extends Component {
  static async getInitialProps(ctx) {
    console.log('ctx.query', ctx.query)

    return { foo: 'bar' }
  }

  handleButtonClick = () => {
    const queryString = 'filter%5Bprice_to%5D=103'

    Router.push(`/?${queryString}`, `/?${queryString}`)
  }

  render() {
    return (
      <ul>
        <li>
          <button type="button" onClick={this.handleButtonClick}>
            Navigate with query param
          </button>
        </li>
        <li>
          <Link href="/a">
            <a>a</a>
          </Link>
        </li>
      </ul>
    )
  }
}

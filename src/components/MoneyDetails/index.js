// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balanceAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          className="details-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="">
          <p className="details-text">Your Balance</p>
          <p className="details-money" data-testid="balanceAmount">
            0
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          className="details-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="">
          <p className="details-text">Your Income</p>
          <p className="details-money" data-testid="incomeAmount">
            0
          </p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          className="details-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="">
          <p className="details-text">Your Expenses</p>
          <p className="details-money" data-testid="expensesAmount">
            0
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails

import { Card, ProgressBar, Stack } from "react-bootstrap"
import Button from 'react-bootstrap/Button';

const BudgetCard = ({name, amount, max}) => {

  const getProgressBarVariant = (amount,max) => {
    const ratio = amount/max
    if (ratio < 0.5) return "primary"
    if (ratio < 0.75) return "warning"
    return "danger"
  }

  return (
    <Card>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                <div className="me-2">YourExpense</div>
                <div>&#8377;{500} / &#8377;{1200}</div>
            </Card.Title>
          <ProgressBar 
            variant={getProgressBarVariant(amount,max)}
            min={0}
            max={max}
            now={amount}
          />
          <Stack direction="horizontal" gap="2" className="mt-3">
            <Button variant='outline-primary' className="ms-auto">Add Budgets</Button>
            <Button variant='outline-secondary'>Add Expense</Button>
          </Stack>
        </Card.Body>
    </Card>
  )
}

export default BudgetCard
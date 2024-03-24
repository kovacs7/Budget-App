import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import BudgetCard from './BudgetCard';
import { Stack } from 'react-bootstrap';

const App = () => {
  return (
      <Container fluid="md" className='my-3'>
        <Stack direction="horizontal" gap="2" className='mb-4'>
          <h1 className='me-auto'>ExpenseTracker</h1>
          <Button variant='primary'>Add Budgets</Button>
          <Button variant='outline-primary'>Add Expense</Button>
        </Stack>
        <BudgetCard
          name={"name"}
          amount={1100}
          max={1200}
        />
      </Container>
  )
}

export default App
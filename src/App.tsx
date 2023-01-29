import Company from './components/Company/Company'
import {generateNumberforCompanyID} from './modules/generateNumber'

function App() {
  generateNumberforCompanyID()
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="container mx-auto max-w-2xl pt-10">
        <Company />
      </div>
    </div>
  )
}

export default App


import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const animals = ["lion", "eagle", "dog", "cat"]
// console.log(animals[0])

const [first, second, third, forth] = ["lion", "eagle", "dog", "cat"]
// console.log(second)

createRoot(document.getElementById('root')).render(
  <App />
)

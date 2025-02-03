import axios from "axios"
import { getNumberProperties, isPerfectNumber, isPrime, sumOfDigits } from "../helpers/index.js"

const classifyNumber = async (req, res) => {
    const { number } = req.query

    const response = await axios.get(`http://numbersapi.com/${number}/math`)

    res.json({
        "number": Number(number),
        "is_prime": isPrime(number),
        "is_perfect": isPerfectNumber(number),
        "properties": getNumberProperties(number),
        "digit_sum": sumOfDigits(number),
        "fun_fact": response?.data
    })
}

export {
    classifyNumber
}
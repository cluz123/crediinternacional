"use client"

import type React from "react"

import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalculator, faDollarSign, faPercentage, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const LoanSimulator = () => {
  const [loanAmount, setLoanAmount] = useState(200000000)
  const [loanTerm, setLoanTerm] = useState(24)
  const [interestRate, setInterestRate] = useState(1.2) // Monthly interest rate (%)

  // Calculate monthly payment using the formula: P = (r*A) / (1 - (1+r)^-n)
  // Where P = monthly payment, r = monthly interest rate (decimal), A = loan amount, n = loan term in months
  const calculateMonthlyPayment = () => {
    const r = interestRate / 100
    const n = loanTerm
    const payment = (r * loanAmount) / (1 - Math.pow(1 + r, -n))
    return payment
  }

  const monthlyPayment = calculateMonthlyPayment()
  const totalPayment = monthlyPayment * loanTerm
  const totalInterest = totalPayment - loanAmount

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value.replace(/[^0-9]/g, "")) || 0
    setLoanAmount(Math.min(Math.max(value, 500000), 200000000))
  }

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0
    setLoanTerm(Math.min(Math.max(value, 12), 120))
  }

  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>,
    min: number,
    max: number,
  ) => {
    const value = Number.parseInt(e.target.value)
    setter(Math.min(Math.max(value, min), max))
  }

  return (
    <div className="w-full border-0 rounded-xl shadow-xl overflow-hidden bg-white">
      <div className="bg-blue-900 text-white p-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Simulador de Préstamos</h3>
        <p className="text-blue-200">Calcula tu cuota mensual en segundos</p>
      </div>
      <div className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="loan-amount" className="flex items-center text-lg font-medium text-blue-900">
                  <FontAwesomeIcon icon={faDollarSign} className="w-5 h-5 mr-2 text-blue-600" />
                  Monto del préstamo
                </label>
                <span className="text-lg font-bold text-blue-900">{formatCurrency(loanAmount)}</span>
              </div>
              <input
                id="loan-amount"
                type="text"
                value={formatCurrency(loanAmount)}
                onChange={handleAmountChange}
                className="w-full text-right text-lg border-2 border-blue-200 focus:border-blue-500 h-12 rounded-md px-4 focus:outline-none"
              />
              <input
                type="range"
                min="500000"
                max="200000000"
                step="100000"
                value={loanAmount}
                onChange={(e) => handleSliderChange(e, setLoanAmount, 500000, 200000000)}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-blue-600">
                <span>$500.000</span>
                <span>$200.000.000</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="loan-term" className="flex items-center text-lg font-medium text-blue-900">
                  <FontAwesomeIcon icon={faClock} className="w-5 h-5 mr-2 text-blue-600" />
                  Plazo (meses)
                </label>
                <span className="text-lg font-bold text-blue-900">{loanTerm} meses</span>
              </div>
              <input
                id="loan-term"
                type="number"
                value={loanTerm}
                onChange={handleTermChange}
                min={12}
                max={120}
                className="w-full text-right text-lg border-2 border-blue-200 focus:border-blue-500 h-12 rounded-md px-4 focus:outline-none"
              />
              <input
                type="range"
                min="12"
                max="120"
                step="1"
                value={loanTerm}
                onChange={(e) => handleSliderChange(e, setLoanTerm, 12, 120)}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-blue-600">
                <span>12 meses</span>
                <span>120 meses</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="interest-rate" className="flex items-center text-lg font-medium text-blue-900">
                  <FontAwesomeIcon icon={faPercentage} className="w-5 h-5 mr-2 text-blue-600" />
                  Tasa de interés mensual
                </label>
                <span className="text-lg font-bold text-blue-900">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2.5"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number.parseFloat(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-blue-600">
                <span>0.5%</span>
                <span>2.5%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-100">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCalculator} className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 text-center mb-6">Resumen del préstamo</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monto del préstamo:</span>
                    <span className="font-bold text-blue-900">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plazo:</span>
                    <span className="font-bold text-blue-900">{loanTerm} meses</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tasa de interés mensual:</span>
                    <span className="font-bold text-blue-900">{interestRate}%</span>
                  </div>
                  <div className="border-t-2 border-blue-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cuota mensual:</span>
                      <span className="font-bold text-2xl text-blue-600">{formatCurrency(monthlyPayment)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total a pagar:</span>
                    <span className="font-bold text-blue-900">{formatCurrency(totalPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total intereses:</span>
                    <span className="font-bold text-blue-900">{formatCurrency(totalInterest)}</span>
                  </div>
                </div>
              </div>

              <Link to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank"  className="w-full  bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-lg h-14 rounded-md flex items-center justify-center">
                Solicitar este préstamo <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>

              <p className="text-xs text-gray-500 text-center">
                Este es solo un simulador. Las tasas y condiciones finales pueden variar según tu perfil crediticio.
                Sujeto a aprobación y políticas de crédito vigentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoanSimulator

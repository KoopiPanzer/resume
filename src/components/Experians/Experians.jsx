import React from 'react'

export const Experians = () => {
  return (
    <>
     <div className="relative flex flex-col items-end">
        <div className="text-right mb-8">
        </div>

        <div className="bg-white mt-32 p-6 rounded-3xl top-1 w-1/2">
          <h1 className="text-5xl font-bold text-blue-600 ">Опыт работы</h1>
          <ul className="text-lg text-gray-700 space-y-4 ">
            <li className="font-semibold">Учебный опыт: 2024.01.09 - текущее время</li>
            <li>ПЛИТ №99 при Президенте КР</li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
          </ul>
        </div>


        <div className="bg-white mt-12 p-6 rounded-3xl w-1/2 shadow-md">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Образование</h1>
          <ul className="text-lg text-gray-700 space-y-4">
            <li className="font-semibold">01.03.2014 - 25.05.2024: УВК ШГ №38</li>
            <li className="text-1xl font-semibold">2024.01.09: Поступление в ПЛИТ №99</li>
          </ul>
        </div>
      </div>
    </>
  )
}
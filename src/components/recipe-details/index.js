import Link from 'next/link'
import React from 'react'

const RecipeDetailsItem = ({getRecipeDetails}) => {
  return (
    <div>
       <div className='p-4 max-w-2xl lg:max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 item-start gap-10'>
            <div className='w-full lg:sticky sm:flex '>
                <img src={getRecipeDetails?.image} alt={getRecipeDetails?.name} className='w-4/5 rounded object-cover'/>
            </div>

            <div>

                <h2 className='text-4xl font-bolder'>
                    {getRecipeDetails?.name}
                </h2>



            <div className='gap-4 mt-5'>
                <p className='text-2xl text-gray-700'>{getRecipeDetails?.mealType}</p>
            </div>

            <div className='gap-4 mt-5'>
                <p className='text-2xl text-gray-800'>{getRecipeDetails?.cuisine}</p>
            </div>

            <div className='gap-4 mt-5'>
                <p className='text-2xl text-gray-800'>Prep Time: {getRecipeDetails?.prepTimeMinutes} minutes</p>
            </div>

            <div className='gap-4 mt-5'>
                <p className='text-2xl text-gray-800'>Cook Time: {getRecipeDetails?.cookTimeMinutes} minutes</p>
            </div>

            <div className='gap-4 mt-5'>
                <p className='text-2xl text-gray-800'>Calories Per Serving: {getRecipeDetails?.caloriesperServing}</p>
            </div>

           

            </div>

            <div>
            <div className='mt-5'>
                <h3 className='font-bold text-3xl'>Ingredients</h3>
                <ul className='space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700'>

                    {
                        getRecipeDetails?.ingredients.map(item => <li>{item}</li>)
                    }

                </ul>
            </div>
            </div>

            <div>

            <div className='mt-5 w-full h-full '>
                <h3 className='font-bold text-3xl'>Instructions</h3>
                <ul className='space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700'>

                    {
                        getRecipeDetails?.instructions.map(item => <li>{item}</li>)
                    }

                </ul>

                <div className='flex gap-8 mt-5 '>
                    <Link href={'/recipes'} className='text-blue-500 hover:text-gray-600'>See More</Link>
                    <Link href={'/'} className='text-blue-500 hover:text-gray-600'>Go Home</Link>

                </div>
            </div>
            </div>

            

        </div>

       </div>
      
    </div>
  )
}

export default RecipeDetailsItem

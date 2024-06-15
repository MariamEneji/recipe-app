import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const RecipeList = ({recipeList}) => {
  // console.log(recipeList)
  return (
    <div>
      <div className='p-4 m-4 lg:max-w-full md:max-w-4xl sm:max-w-2xl '>
        <div className='flex justify-between items-center mb-10 '>
        <h1 className='text-2xl lg:text-4xl font-bolder '>Let's get Cooking</h1>
        <Link href={'/'} className='text-blue-500 hover:text-gray-600'>Go Home</Link> 
        </div>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            recipeList && recipeList.length > 0 ?

            recipeList.map(recipe => <Link href={`/recipes/${recipe.id}`}>

              <Card>
                <CardContent className='bg-white rounded-md  overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all '>

                  <div className='w-full aspect-w-16 aspect-h-8 lg:h-80'>
                    <img src={recipe.image} alt={recipe.name} className='w-full h-full object-cover object-top'/>

                  </div>

                  <h3 className='text-xl font-bold mb-2'>{recipe.name}</h3>
                  <p className='text-gray-400 mb-2'>Rating: {recipe.rating}</p>
                  <p className='text-lg font-bold text-gray-600 mb-2'>{recipe.cuisine}</p>
                
                </CardContent>
              </Card>

            </Link>)

            :null
          }


        </div>

      </div>
    </div>
  )
}

export default RecipeList

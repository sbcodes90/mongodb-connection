import React from 'react'

function LoadingScreen({message}) {
  return (
  <div>
    <div className="bg-teal-500 text-white font-semibold text-2xl lg:text-5xl opacity-100 flex h-screen items-center justify-center">{message}
    <div class="animate-spin inline-block size-12 border-[3px] border-current border-t-teal-600 text-teal-200 rounded-full dark:text-teal-500 ml-5 mt-2" role="status" aria-label="loading">
</div>
</div>
    </div>
  )
}

export default LoadingScreen
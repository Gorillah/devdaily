"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import React, { useEffect, useState } from "react"

type Props = {
  slug: string
  noCount?: boolean
  showCount?: boolean
}

const supabase = createClientComponentClient()

const ViewCounter = ({ slug, noCount = false, showCount = true }: Props) => {
  const [views, setViews] = useState(0)

  useEffect(() => {
    const incrementViews = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        })

        if (error) {
          console.log("error incrementing inside try catch block:", error)
        }
      } catch (error) {
        console.log("error incrementing views:", error)
      }
    }
    if (!noCount) {
      incrementViews()
    }
  }, [slug, noCount])

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single()

        if (error) {
          console.log("error incrementing inside try catch block:", error)
        }
        setViews(data ? data.count : 0)
      } catch (error) {
        console.log("error incrementing views:", error)
      }
    }

    getViews()
  }, [slug])

  return (
    <div className="flex">
      <p className="mr-2 !text-lg dark:text-dark">Views Count:</p>
      {views && showCount ? (
        <span className="dark:text-dark"> {views}</span>
      ) : (
        0
      )}
    </div>
  )
}
export default ViewCounter

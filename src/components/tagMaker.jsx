import React from 'react'

const TagMaker = ({tag, index}) => {1
  return (
    <p className={`absolute ${index == '1' ? `${tag == 'div' ? '-top-20' : '-top-8'}` : `${tag == '/div' ? '-bottom-20' : '-bottom-8'}`} ${tag == 'div' || tag == '/div' ? 'sm:-left-12' : 'sm:-left-4'} text-g_Text_Shaded opacity-60 font-primary text-2xl`}>
      &lt;{tag}&gt;
    </p>
  )
}

export default TagMaker
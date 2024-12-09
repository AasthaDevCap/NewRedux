import React from "react";
import { Suspense } from "react";
const Mychlid=React.lazy(()=>import('./ChildB'));

const Paraent=()=>{
return(
   <>
    <Suspense>
        <Mychlid/>
    </Suspense>
    </>
)
};

export default Paraent;
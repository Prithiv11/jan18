var input = [

    {
         "id": 1,
         "title": "Title 1",
         "childrens": [
              {
                   "id": 2,
                   "title": "Title 2",
                   "childrens": []
              }
         ]
    },


    {
         "id": 3,
         "title": "Title 3",
         "childrens": [
              {
                   "id": 4,
                   "title": "Title 4",
                   "childrens": [
                        {
                             "id": 5,
                             "title": "Title 5",
                             "childrens": []
                        }
                   ]
              }
         ]
    }
]



var result = []


function unwrap (n){
    for(obj of n){
      //   console.log(obj);
      result.push(obj)
        if(obj.childrens[0]!=[])
        {
           //  console.log(obj.childrens[0]);
           result.push(obj.childrens[0])
            if(obj.childrens[0].childrens[0]!=[]){
                // console.log(obj.childrens[0].childrens[0]);
                result.push(obj.childrens[0].childrens[0])
            }
        }
    }
    console.log(result);
   
}

unwrap(input)
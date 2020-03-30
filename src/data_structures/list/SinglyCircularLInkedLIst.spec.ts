import SinglyCircularLinkedList from "./SinglyCircularLInkedLIst";

test("testing constructor !", () => {
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");

  list.forEach(element => {
    expect(element.getData).toBe("hamza");
  });
});

test("testing fucntion [addFirst()] One!", () => {
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");

  const expected = ["hamza"];
  const expected2 = [0];

  let array = [];
  list.forEach(element => {
    array.push(element.getData);
  });

  expect(array).toEqual(expect.arrayContaining(expected));

  let done;
  list.forEach(element => {
    if (element.getNext.getIndex === 0) {
      done = element.getNext.getIndex;
    }
  });

  expect(done).toBe(0);

  let array2 = [];
  list.forEach(element => {
    array2.push(element.getNext.getIndex);
  });

  expect(array2).toEqual(expect.arrayContaining(expected2));
});

test("testing fucntion [addFirst()] Tow!", () => {
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");

  const expected = ["siera", "bravo", "alpha", "hamza"];
  const expected2 = [1, 2, 3, 0];

  let array = [];
  list.AddFirst("alpha");
  list.AddFirst("bravo");
  list.AddFirst("siera");
  list.forEach(element => {
    array.push(element.getData);
  });

  expect(array).toEqual(expect.arrayContaining(expected));

  let done;
  list.forEach(element => {
    if (element.getNext.getIndex === 0) {
      done = element.getNext.getIndex;
    }
  });

  expect(done).toBe(0);

  let array2 = [];
  list.forEach(element => {
    array2.push(element.getNext.getIndex);
  });

  expect(array2).toEqual(expect.arrayContaining(expected2));
});

test('testing function [addLast()] one!', () => {
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");

    const expected = ["hamza","alpha","bravo","siera"];
    const expected2 = [1, 2, 3, 0];
  
    let array = [];
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    list.forEach(element => {
      array.push(element.getData);
    });
  
    expect(array).toEqual(expect.arrayContaining(expected));
  
    let done;
    list.forEach(element => {
      if (element.getNext.getIndex === 0) {
        done = element.getNext.getIndex;
      }
    });
  
    expect(done).toBe(0);
  
    let array2 = [];
    list.forEach(element => {
      array2.push(element.getNext.getIndex);
    });
  
    expect(array2).toEqual(expect.arrayContaining(expected2));
});

test('testing function [addAfter()] one!', () => {
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");

    const expected = ["hamza","alpha","whisky","bravo","siera"];
    const expected2 = [1, 2, 3,4,0];
  
    let array = [];
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    list.AddAfter("alpha","whisky");
    list.forEach(element => {
      array.push(element.getData);
    });
  
    expect(array).toEqual(expect.arrayContaining(expected));
  
    let done;
    list.forEach(element => {
      if (element.getNext.getIndex === 0) {
        done = element.getNext.getIndex;
      }
    });
  
    expect(done).toBe(0);
  
    let array2 = [];
    list.forEach(element => {
      array2.push(element.getNext.getIndex);
    });
  
    expect(array2).toEqual(expect.arrayContaining(expected2));
});

test('testing function [addBefore()] one!', () => {
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");

    const expected = ["hamza","whisky","alpha","bravo","siera"];
    const expected2 = [1, 2, 3,4,0];
  
    let array = [];
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    list.AddBefore("alpha","whisky");
    list.forEach(element => {
      array.push(element.getData);
    });
  
    expect(array).toEqual(expect.arrayContaining(expected));
  
    let done;
    list.forEach(element => {
      if (element.getNext.getIndex === 0) {
        done = element.getNext.getIndex;
      }
    });
  
    expect(done).toBe(0);

    let data;
    list.forEach(element => {
      if (element.getData === 'whisky') {
        data = element.getIndex;
      }
    });
  
    expect(data).toBe(1);
  
    let array2 = [];
    list.forEach(element => {
      array2.push(element.getNext.getIndex);
    });
  
    expect(array2).toEqual(expect.arrayContaining(expected2));
});

test('testing function [Clear()] one!', () => {
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");
  
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    list.AddBefore("alpha","whisky");

    list.Clear()

    let length=list.length
    expect(length).toBe(0);
});

test('testing function [Contains()] one! ', () => {
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");
  
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    list.AddBefore("alpha","whisky");

    let contains:boolean=list.Contains('alpha')

    expect(contains).toBeTruthy();

    contains=list.Contains('bravo')

    expect(contains).toBeTruthy();

    contains=list.Contains('whisky')

    expect(contains).toBeTruthy();

    contains=list.Contains('??')

    expect(contains).toBeFalsy();
});

test('testing function [Find()] one! ', () => {
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");
  
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    list.AddBefore("alpha","whisky");

    list.Find('hamza',(element)=>{
        expect(element.getIndex).toBe(0)
    })

    let bool=false
    list.Find('balo',()=>{
        bool=true
    })

    expect(bool).toBeFalsy()

    let bool2=false
    list.Find('whisky',()=>{
        bool2=true
    })

    expect(bool2).toBeTruthy()
});

test('testing function [findLast()] one! ', () => {
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");
  
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    list.AddBefore("hamza","whisky");
    list.AddBefore("whisky","whisky");

    list.FindLast('whisky',(element)=>{
        expect(element.getIndex).toBe(1)
    })
});

test('testing function [RemoveFirst()] one! ', ()=>{
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");
    
    list.AddAfter("hamza","whisky");
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    
    list.RemoveFirst()

    list.FindLast('siera',(element)=>{
        expect(element.getNext.getIndex).toBe(0)
    })


})

test('testing function [RemoveLast()] one! ', ()=>{
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");
    
    list.AddAfter("hamza","whisky");
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    
    list.RemoveLast()

    list.Find('bravo',(element)=>{
        expect(element.getNext.getIndex).toBe(0)
    })


})

test('testing function [Remove()] one! ', ()=>{
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");
    
    list.AddAfter("hamza","whisky");
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    
    list.Remove('alpha')

    list.Find('bravo',(element)=>{
        expect(element.getIndex).toBe(2)
    })

    list.Remove('hamza')

    list.Find('whisky',(element)=>{
        expect(element.getIndex).toBe(0)
    })
})

test('testing function [toArray()] one! ', ()=>{
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");
    
    let expected=["hamza","whisky","alpha","bravo","siera"]

    list.AddAfter("hamza","whisky");
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    
    const array=list.toArray()

    expect(array).toEqual(expect.arrayContaining(expected));
})

test('testing function [forEach()] one! ', ()=>{
    const list: SinglyCircularLinkedList<string | number> = new SinglyCircularLinkedList<string | number>("hamza");
    
    let expected=["hamza","whisky","alpha","bravo","siera"]

    list.AddAfter("hamza","whisky");
    list.AddLast("alpha");
    list.AddLast("bravo");
    list.AddLast("siera");
    
    let array=[]

    list.forEach(element => {
        array.push(element.getData)
    });

    expect(array).toEqual(expect.arrayContaining(expected));
})
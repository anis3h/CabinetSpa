  // Date of birth validation
  export let customFn: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => { 
    return new Date(args.value) <= new Date(); 
  } 

  export let dateOfBirthRule = { required: true, value:[customFn, 'Enter a different date'] } 
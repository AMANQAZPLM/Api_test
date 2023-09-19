import express from "express";

export const controllerget = (req, res) => {
  const status = {
    status: "running get",
  };

  res.send(status);
};

export const controllerpost = (req, res) => {
  let data = req.body.data;
  console.log(data);

  const alphabetArray = [];
  const nonAlphabetArray = [];
  let prev = "A";
  data.forEach((str) => {
    if (/^[a-zA-Z]+$/.test(str)) {
      // String contains only alphabets
      if (str > prev) {
        prev = str;
      }
      alphabetArray.push(str);
    } else {
      // String contains non-alphabet characters

      nonAlphabetArray.push(str);
    }
  });

  console.log(alphabetArray);
  console.log(nonAlphabetArray);
  const status = {
    is_success: "true",
    user_id: "Justin",
    roll_number: "AsmvAosmc",
    numbers: nonAlphabetArray,
    alphabets: alphabetArray,
    highest_alphabet: prev,
  };

  res.send(status);
};

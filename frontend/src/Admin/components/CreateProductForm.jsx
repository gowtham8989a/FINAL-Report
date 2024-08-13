import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Fragment } from "react";
// import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/product/Action";




const CreateProductForm = () => {
  
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });
const dispatch=useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  

  


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData))
    console.log(productData);
  };



  return (
    <Fragment className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen "
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="category">VEGETABLES</MenuItem>
                <MenuItem value="Characters">FRUITS</MenuItem>
                <MenuItem value="kids">DAIRY PRODUCTS</MenuItem>
                <MenuItem value="handmade">HOMEMADE THINGS</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="toys">FRESH VEGETABLES</MenuItem>
                <MenuItem value="accessories">FRESH JUICE </MenuItem>
                <MenuItem value="brands">EXOTIC FRUITS</MenuItem>
                <MenuItem value="Cartoon">EXOTIC VEGETABLES</MenuItem>
                <MenuItem value="Anime">BEVERAGES</MenuItem>
                <MenuItem value="Fantasy">CHOCOLATES</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="Action">FRUITS</MenuItem>
                <MenuItem value="Games">VEGETABLES</MenuItem>
                <MenuItem value="Soft">FOODGRAINS, OIL ,MASALA</MenuItem>
                <MenuItem value="Infant">EGGS , MEAT, FISH</MenuItem>
                <MenuItem value="Doll">FRESH JUICE</MenuItem>
                <MenuItem value="Construction">SNACK AND BRANDED FOODS</MenuItem>
                <MenuItem value="Outdoor">DURIAN</MenuItem>
                <MenuItem value="Indoor">DRAGON FRUIT</MenuItem>
                <MenuItem value="Leisure">RAMBUTAN</MenuItem>
                <MenuItem value="Play">STAR FRUIT</MenuItem>
                <MenuItem value="Ride">ROMANESCO</MenuItem>
                <MenuItem value="Scooters">KOHLRABI</MenuItem>
                <MenuItem value="Cycles">OCA</MenuItem>
                <MenuItem value="Spiderman">SPIDER MAN</MenuItem>
                <MenuItem value="Ironman">IRON MAN</MenuItem>
                <MenuItem value="Doraemon">DORAEMON</MenuItem>
                <MenuItem value="Shinchan">SHINCHAN</MenuItem>
                <MenuItem value="Batman">BATMAN</MenuItem>
                <MenuItem value="Oggy">OGGY</MenuItem>
                <MenuItem value="Tom and Jerry">TOM AND JERRY</MenuItem>
                <MenuItem value="Naruto">NARUTO</MenuItem>
                <MenuItem value="One piece">ONE PIECE</MenuItem>
                <MenuItem value="Jujutsu kaisen">JUJUTSU KAISEN</MenuItem>
                <MenuItem value="Demon slayer">DEMON SLAYER</MenuItem>
                <MenuItem value="Solo leveling">SOLO LEVELING</MenuItem>
                <MenuItem value="Silent voice">SILENT VOICE</MenuItem>
                <MenuItem value="Harry potter">HARRY POTTER</MenuItem>
                <MenuItem value="Toy Story">TOY STORY</MenuItem>
                <MenuItem value="The Cabbage Fairy">THE CABBAGE FAIRY</MenuItem>
                <MenuItem value="Dragon warrior">DRAGON WARRIOR</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
            
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProductForm;

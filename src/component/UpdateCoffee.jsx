import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const updateCoffee = () => {
    const coffee = useLoaderData()

    const  {name,quantity,supplier,taste,category,details,photo,_id} = coffee;



    const handleUpdateCoffee = event =>{
        event.preventDefault()
        const form= event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name,quantity,supplier,taste,category,details,photo}
        // console.log(newCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateCoffee)

        })
        .then(res => res.json())
        .then(data =>{
            console.log('then',data);

            if(data.modifiedCount>0){
              Swal.fire({
                title: 'success!',
                text: 'Coffee updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
            // form.reset()
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update COffee : {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* form row */}
        <div className="md:flex mb-4 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                name='name'
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/*  */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
           
              <input
                type="text"
                name='quantity'
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/*  */}
        </div>
        {/* form row */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/*  */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
           
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/*  */}
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-4 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/*  */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
           
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/*  */}
        </div>
        {/* form photo url row */}
        <div className="mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              
              <input
                type="category"
                name="photo"
                defaultValue={photo}
                placeholder="photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/*  */}
         
        </div>

       
        <input type="submit" value="Update Coffee" className="btn btn-block"/>
      </form>
    </div>
    );
};

export default updateCoffee;
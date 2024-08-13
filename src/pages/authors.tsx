
import { Modal } from "flowbite-react";
import { useRef, useState } from "react";
export function Author() {
  const authors = [
    {
      name: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      image: './home.jpg',
    },
    {
      name: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      image: './home.jpg',
    },
    {
      name: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      image: './home.jpg',
    },
    {
      name: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      image: './home.jpg',
    },
    {
      name: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      image: './home.jpg',
    },
  ];
  const [openModal, setOpenModal] = useState(false);

  return (
    <>

      <div className="container mt-48">
        <div className="row">
          {authors.map((author, index) => (
            <div key={index} className="col-lg-3 col-md-4 mb-3">
              <a href="#" className="author-card group shadow-lg rounded-md px-4 py-4 flex justify-between hover:bg-gray-700 transform transition duration-500" onClick={() => setOpenModal(true)}>
                <div>
                  <img src={author.image} alt="author-image" className="w-20 h-20 rounded-full object-cover" />
                  <div className="author-info">
                    <h1 className="author-name">{author.name}</h1>
                    <p className="author-bio">{author.bio}</p>
                  </div>
                </div>
                <div className="profile-link">
                  <i className="fa-solid fa-arrow-up-right-from-square text-stone-200  group-hover:text-white" ></i>
                </div>
              </a>
            </div>
          ))}
        </div>

        <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">

              <div>
                <strong>Name:</strong>
                <h2>John Doe</h2>
              </div>

              <div>
                <strong>Bio:</strong>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit maiores necessitatibus illum ex cum ratione esse ad eius enim repellat, placeat quos recusandae, corporis totam accusantium labore id minima beatae.</h2>
              </div>

              <div>
                <strong>Background:</strong>
                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iste quaerat expedita ex itaque dolores autem, officia aut dicta ad placeat eligendi nostrum alias minima adipisci incidunt quos est optio?</h2>
              </div>

              <div>
                <strong>Published works</strong>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium odio quia fugit dolores suscipit repellendus vitae porro autem iste aperiam, voluptates deleniti sed commodi eaque voluptatem saepe ipsa molestiae quos.</h2>
              </div>

              <div>
                <strong> Social media
                </strong>
                <ul>
                  <li className="text-blue-500">
                    <strong>Instagram:</strong>
                    <a href="#">@johndoe</a>
                  </li>
                  <li className="text-blue-00 space-x-2">
                    <strong>Twitter:</strong>
                    <a href="#">@johnsdoe</a>
                  </li>
                </ul>
              </div>

              <div>
                <strong>Contact</strong>
                <a href="tel:+23490"> 2300590</a>
              </div>

              <div>
                <strong>Hobbies</strong>
                <ul>
                  <li>Football</li>
                  <li>Basketball</li>
                </ul>
              </div>

              <div>
                <strong>Location</strong>
                <h2>kentucky 42 Avenue</h2>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}






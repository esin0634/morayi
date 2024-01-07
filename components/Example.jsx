import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Example() {
  return (
    <>
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
            <div className="sm:max-w-lg sm:space-y-20">
            <h1 className="about-us-title w-1/6">
              STUDIO OF WOODWORK CRAFT AND DESIGN
            </h1>
            <div className="space-y-3">
              <p className="anan">about us: </p>
              <p className=" text-sm text-gray-700 w-3/6 ">
                Here in PurpleBear, our designs are a harmonious blend of tradition and innovation, a testament to our dedication to timeless aesthetics. As your fingers trace its flawless contours, you can feel the soul of the woodwork resonating with your own. It's a connection, an unspoken understanding that this piece is more than just furniture; it's a piece of art, an heirloom in the making.
              </p>
            </div>
            <a
                href="/store"
                className="inline-block rounded-md border border-transparent bg-[#4a1a63c4] px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
          </div>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
    </>
  )
}
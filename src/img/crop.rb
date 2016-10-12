require 'mini_magick'

files = Dir.glob('./2560x1440/*.jpg')
files.each do |file|
  file_name = file.split('/').last
  puts file_name
  if not File.exist?("./1280x720/#{file_name}")
    puts 'processing...'
    image = MiniMagick::Image.open(file)
    image.resize "1280x720"
    image.write "./1280x720/#{file_name}"
  else
    puts 'skip'
  end
end

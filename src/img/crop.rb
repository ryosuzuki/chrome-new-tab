require 'mini_magick'

files = Dir.glob('./2560x1440/*.jpg')
files.each do |file|
  file_name = file.split('/').last
  puts file_name
  if not File.exist?("./1280x720/#{file_name}")
    puts 'processing...'
    image = MiniMagick::Image.open(file)
    image.combine_options do |c|
      c.gravity 'center'
      c.crop "1280x720+0+0"
    end
    image.write "./1280x720/#{file_name}"
  else
    puts 'skip'
  end
end
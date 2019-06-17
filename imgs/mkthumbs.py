import os

ff = os.listdir('.')
for f in ff:
    os.system('convert -thumbnail 100 %s thumb.%s' % (f, f))

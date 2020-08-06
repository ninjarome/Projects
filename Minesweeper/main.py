import pygame
import time
import random

display_width = 500
display_height = 600

black = (0, 0, 0)
grey = (127, 127, 127)
white = (255, 255, 255)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)
orange = (255, 170, 0)
edges = []
for i in range(10):
    edges.append(i)
    if i in range(1, 9):
        edges.append(i*10)
        edges.append(i*10 + 9)
    edges.append(i+90)
#print(edges)


class button():
    def __init__(self, color = None, outline = None, x = 0,y = 0,width = 0,height = 0, count = 0):
        self.color = color
        self.outline = outline
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.count = count
        self.outline = outline
        self.checked = False
        self.found = None
        self.flag = False

    def draw(self,win):
        #Call this method to draw the button on the screen
        if self.outline:
            pygame.draw.rect(win, self.outline, (self.x,self.y,self.width,self.height),0)
            pygame.draw.rect(win, self.color, (self.x+3,self.y+3,self.width-7,self.height-7),0)

        else:
            pygame.draw.rect(win, self.color, (self.x,self.y,self.width,self.height),0)
        

    def isOver(self, pos):
        #Pos is the mouse position or a tuple of (x,y) coordinates
        if pos[0] > self.x and pos[0] < self.x + self.width:
            if pos[1] > self.y and pos[1] < self.y + self.height:
                return True
            
        return False

def placeMines():
    mineList = []
    mines = False
    for i in range (100):
        m = random.randrange(0, 15)
        if m < 2:
            mineList.append(1)
        else:
            mineList.append(0)
    for i in mineList:
        if i == 1:
            mines = True
    while not mines:
        mineList = placeMines
    return mineList

def around(count):
    aroundList = []
    #top row
    if count % 10 != 0 and count - 9 > 0:
        aroundList.append(count - 11)
    if count - 9 > 0:
        aroundList.append(count - 10)
    if (count - 9) % 10 != 0 and count - 9 > 0:
        aroundList.append(count - 9)

    #middle row    
    if count % 10 != 0:
        aroundList.append(count - 1)
    if (count - 9) % 10 != 0:
        aroundList.append(count + 1)

    #bottom row    
    if count % 10 != 0 and count + 9 < 99:
        aroundList.append(count + 9)
    if count + 9 < 99:
        aroundList.append(count + 10)
    if (count - 9) % 10 != 0 and count + 9 < 99:
        aroundList.append(count + 11)
        
    return aroundList
    

def search(buttList, minesList, space, safe):
    if minesList[space.count] == 0:
        if not space.checked:
            safe.remove(space.count)
        buttList[space.count].checked = True
        found = 0
        aroundList = around(space.count)
        for i in aroundList:
            if minesList[i] == 1:
                found += 1
        if found == 0:
            buttList[space.count].color = grey
            for i in aroundList:
                if not buttList[i].checked:
                    search(buttList, minesList, buttList[i], safe)
        else:
            buttList[space.count].color = blue
            space.found = found
             
    else:
        for i in buttList:
            if minesList[i.count] == 1:
                i.color = red
                i.draw(gameDisplay)
        message_display("You lose :(")

def message_display(text):
    largeText = pygame.font.Font('freesansbold.ttf', 90)
    TextSurf = largeText.render(text, True, black)
    TextRect = TextSurf.get_rect()
    TextRect.center = ((display_width//2), (display_height//2))
    gameDisplay.blit(TextSurf, TextRect)
    pygame.display.update()

    time.sleep(2)
    
    game_loop()
    
pygame.init()
gameDisplay = pygame.display.set_mode((display_width, display_height))
pygame.display.set_caption('Sweeper of Bombs')
clock = pygame.time.Clock()

def game_loop():
    gameExit = False
    #butt = button(green, blue, 0, 100, 50, 50, 0)
    butts = []
    x = 0
    y = 100
    mines = placeMines()
    safe = []
    for i in range(100):
        butts.append(button(green, blue, x, y, 50, 50, i))
        if x > 400:
            x = 0
            y += 50
        else:
            x += 50
        if mines[i] == 0:
            safe.append(i)
    while not gameExit:
        gameDisplay.fill(black)
        pygame.draw.rect(gameDisplay, white, [0 , 100 , display_width,  display_height])
        for i in butts:
            if i.flag and not i.checked:
                i.color = orange
            elif not i.flag and not i.checked:
                i.color = green
            i.draw(gameDisplay)
            if i.found:
                gameDisplay.blit(pygame.font.Font('freesansbold.ttf', 40).render(str(i.found), True, red), pygame.Rect(i.x + 15, i.y + 10, 20, 20))
        #butt.draw(gameDisplay)
        
        pygame.display.update()
        if len(safe) == 0:
            message_display("You Win :)!")
        clock.tick(120)
        
        pos = pygame.mouse.get_pos()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

            if event.type == pygame.MOUSEBUTTONDOWN and pygame.mouse.get_pressed()[0] == 1:
                for i in butts:
                    if i.isOver(pos):
                        search(butts, mines, i, safe)

            if event.type == pygame.MOUSEBUTTONDOWN and pygame.mouse.get_pressed()[2] == 1:
                for i in butts:
                    if i.isOver(pos):
                        if i.flag:
                            i.flag = False
                        else:
                            i.flag = True

            if event.type == pygame.MOUSEMOTION:
                for i in butts:
                    if i.isOver(pos):
                        i.outline = green
                    else:
                        i.outline = blue



game_loop()
pygame.quit()
quit()

                
